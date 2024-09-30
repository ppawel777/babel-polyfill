async function getScriptResult(taskId) {
   const url = `${host}/automation/scripts/script_result_on_cluster/?task_id=${taskId}`
   const requestParams = {headers: headers}
   const response = await fetch(url, requestParams)
   const data = await response.json()

   if (response.ok) {
       return data
   } else {
       alert(`Произошла ошибка при запросе:\n${response.detail}`);
   }
}