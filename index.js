module.exports = function jsonDataPaths(data) {
  var paths = []

  function buildPayloadDataPaths(obj, path) {
    Object.keys(obj).forEach(function keysForEach(key) {
      var appendedPath = ''
      if (obj[key] && typeof obj[key] !== 'object') {
        appendedPath = path + '/' + key
        if (appendedPath[0] === '/') appendedPath = appendedPath.substring(1, appendedPath.length)
        paths.push(appendedPath)
      } else {
        appendedPath = path + '/' + key
        if (appendedPath[0] === '/') appendedPath = appendedPath.substring(1, appendedPath.length)
        paths.push(appendedPath)
        if (obj[key]) buildPayloadDataPaths(obj[key], appendedPath)
      }
    })
  }
  buildPayloadDataPaths(data, '')
  return paths
}
