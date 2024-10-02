import 'core-js/fn/promise'

// function getCookie(name) {
//     var search = name + '='
//     if (document.cookie.length > 0) {
//        var offset = document.cookie.indexOf(search)
//        if (offset != -1) {
//           offset += search.length
//           var end = document.cookie.indexOf(';', offset)
//           if (end == -1) end = document.cookie.length
//           return unescape(document.cookie.substring(offset, end))
//        }
//     }
//  }
function getCookies() {
   let result = {}
   document.cookie.split(';').forEach((el) => {
      let split = el.split('=')
      result[split[0].trim()] = split.slice(1).join('=')
   })
   return result
}

async function getScriptResult(taskId) {
   const url = `${host}/automation/scripts/script_result_on_cluster/?task_id=${taskId}`
   console.log('script_result_on_cluster url', url)
   const requestParams = { headers: headers }
   const response = await fetch(url, requestParams)
   const data = await response.json()

   if (response.ok) {
      return data
   } else {
      alert(`Произошла ошибка при запросе:\n${response.detail}`)
   }
}

async function runScript(scriptMeta) {
   console.log('runScript(scriptMeta)')
   const url = `${host}/automation/scripts/script_start_on_cluster/`
   const requestParams = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(scriptMeta),
   }
   const response = await fetch(url, requestParams)
   const data = await response.json()

   if (response.ok) {
      return data
   } else {
      alert(`Произошла ошибка при запросе:\n${response.detail}`)
   }
}

const cookies = getCookies()
const host = window.location.origin
console.log('window.location.origin', host)
const headers = {
   'Content-Type': 'application/json',
   Accept: 'application/json',
   Authorization: `Bearer ${cookies.access_token}`,
   //  Authorization: `Bearer ${getCookie('access_token')}`,
}

window.onload = async function () {
   console.log('Run on onload')

   // убираем комментарий для IE
   // if (!(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1)) {
   //    var IE_div = document.getElementById('ie_div')
   //    IE_div.style.display = 'none'
   // }

   // получаем параметры площадки для поиска
   function getSearchParams(name) {
      if ((name = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)').exec(location.search)))
         return decodeURIComponent(name[1])
   }
   var RegionID = getSearchParams('RegionID') || null
   var SiteID = getSearchParams('SiteID') || null

   //  const searchParams = new URLSearchParams(window.location.search)
   //  console.log('searchParams', searchParams)
   //  var RegionID = null
   //  var SiteID = null
   //  for (const [paramName, paramValue] of searchParams.entries()) {
   //     console.log(paramName + ': ' + paramValue)
   //     if (paramName == 'RegionID') {
   //        RegionID = paramValue
   //     }
   //     if (paramName == 'SiteID') {
   //        SiteID = paramValue
   //     }
   //  }

   // если параметры заданы
   if (RegionID && SiteID) {
      console.log('start >>')
      // информация
      document.title = 'Данные о площадке ' + RegionID + '-' + SiteID
      var header_div = document.getElementById('header_div')
      if (header_div) {
         header_div.innerHTML = document.title
      }
      // показываем табы
      var tabs = document.getElementById('tabs')
      if (tabs) {
         tabs.style.display = 'block'
      }

      const scriptMeta = {
         name: 'Opview_Show_Contacts_on_site',
         need_result: true,
         exec_timeout: 15,
         params: { RegionID: RegionID, SiteID: SiteID },
      }

      console.log(scriptMeta)

      const runData = await runScript(scriptMeta)
      if (runData?.task_id) {
         let timeout = setTimeout(async () => {
            let interval = setInterval(async () => {
               const resultData = await getScriptResult(runData.task_id)
               if (!resultData || resultData?.ready) {
                  clearInterval(interval)
                  clearTimeout(timeout)
                  console.log(resultData)

                  // информация по площадке
                  var site_info_div = document.getElementById('site_info')
                  if (resultData['result']) {
                     var site_info = resultData['result']['site_info']
                     if (site_info_div) {
                        if (site_info.length > 0) {
                           var site_info_html =
                              '<table border=\'1\' bordercolor=\'black\' cellpadding=\'4\' style=\'border-collapse:collapse\'>'
                           site_info_html =
                              site_info_html +
                              '<tr><th>Имя площадки</th><th>VIP</th><th>Телефон</th><th>Маршрут</th><th>Место</th></tr>'
                           for (var i = 0; i < site_info.length; i++) {
                              site_info_html = site_info_html + '<tr>'
                              site_info_html = site_info_html + '<td>' + site_info[i]['NAME_RUS'] + '</td>'
                              site_info_html = site_info_html + '<td>' + site_info[i]['VIP'] + '</td>'
                              site_info_html = site_info_html + '<td>' + site_info[i]['PHONE'] + '</td>'
                              site_info_html = site_info_html + '<td>' + site_info[i]['ROUTE'] + '</td>'
                              site_info_html = site_info_html + '<td>' + site_info[i]['PLACE'] + '</td>'
                              site_info_html = site_info_html + '</tr>'
                           }
                           site_info_html = site_info_html + '</table>'
                           site_info_div.innerHTML = site_info_html
                        } else {
                           site_info_div.innerHTML = 'Нет данных'
                        }
                     }
                  } else {
                     if (site_info_div) {
                        site_info_div.innerHTML = 'Что-то пошло не так...'
                     }
                  }

                  // информация по контактам
                  var contact_info_div = document.getElementById('contact_info')
                  if (resultData['result']) {
                     var contact_info = resultData['result']['contact_info']
                     if (contact_info_div) {
                        if (contact_info.length > 0) {
                           var contact_info_html =
                              '<table border=\'1\' bordercolor=\'black\' cellpadding=\'4\' style=\'border-collapse:collapse\'>'
                           contact_info_html =
                              contact_info_html +
                              '<tr><th>Имя</th><th>Должность</th><th>Телефон</th><th>Тип контакта</th></tr>'
                           for (var j = 0; j < contact_info.length; j++) {
                              contact_info_html = contact_info_html + '<tr>'
                              contact_info_html = contact_info_html + '<td>' + contact_info[j]['NAME'] + '</td>'
                              contact_info_html = contact_info_html + '<td>' + contact_info[j]['POSITION'] + '</td>'
                              contact_info_html = contact_info_html + '<td>' + contact_info[j]['PHONE'] + '</td>'
                              contact_info_html = contact_info_html + '<td>' + contact_info[j]['CONTACT_TYPE'] + '</td>'
                              contact_info_html = contact_info_html + '</tr>'
                           }
                           contact_info_html = contact_info_html + '</table>'
                           contact_info_div.innerHTML = contact_info_html
                        } else {
                           contact_info_div.innerHTML = 'Нет данных'
                        }
                     }
                  } else {
                     if (contact_info_div) {
                        contact_info_div.innerHTML = 'Что-то пошло не так...'
                     }
                  }
               }
            }, 1000)
         }, scriptMeta.exec_timeout)
      }
      console.log('<< end')
   } else {
      // var header_div = document.getElementById('header_div')
      if (header_div) {
         header_div.innerHTML = 'Недостаточно параметров. Укажите регион и номер площадки'
      }
   }
}
