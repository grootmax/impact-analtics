function getServerConfiguration() {
  return {
    baseURL: 'https://s3-ap-southeast-1.amazonaws.com',
  }
}
const serverConfig = getServerConfiguration()

export default { serverConfig }
