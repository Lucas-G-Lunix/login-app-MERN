export default {
    port: 5000,
    dbUri: 'mongodb://localhost:27017/login-app',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    accessTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICWgIBAAKBgE3j+BzjW2DCES1y4Zsp3TBA6MlJ7zxTm778d7/ORS77F7eaYhc0
    a5WujaNXD3YONqn546GD/8bslgFgFtiOXDxNmWXa03oy07VuV9v7bzCddWZuXNHL
    gbS7BXUXgOZ5GoSMWgHYB6gT01ewbeQg9EyrlwQ/ChtGkPzjuMmqV2e1AgMBAAEC
    gYA8lRoAbh4+zfNKZFZxt0ghJftpxKXdSDKVhA0oFKne9tHlrqCo587eJ1xnNWoD
    Kt79qi2RDPg+ovmxrClY2rGGIdu+FPlAIBkP0yHi+nvlO+3LFIa+0HH4q+x2ncL5
    TDB4X40SaNDFkKpbJB1aYTmlWhT021FOTICxZlZSTy/9QQJBAJVLfc8Ppls90ZNl
    op72KEuDmvpF9g8JEyhmvogvmAp063d0QqSj+Lqcb67igTFGPv7ETHaCIfmkY3UP
    +ECDgUkCQQCFj5tS30Xt0VU0YeV9ORTlgC2de53L/u2ou13tb2JDkWA7B04h2JbN
    jvS1snyRBZ32ngfYaRG/1iQE0txA8h8NAkAQHoqC5MmtaEtMgtjAGQvYu2jsRMmA
    bhZnclB4G8tqtZ0G1MKtTBb67xEP7NzOGSuMDl3DHeHVNm6WoRbIwGohAkBIp6VE
    AKdmxoBGPZb8dsfSTNcDm1JsvWIFbt+aoQPgY73ofoHXUZ4/divSh6TRsy+KD8+O
    vyFjrRbs9NPSFKQlAkAChrW6li6NGZJAwTjLd0GbHusiW5ttSGan8cBtAvwlHYw0
    UbTNoUshXxKBMuvHIfVoY/PqAb4PSRUk2+drLI5J
    -----END RSA PRIVATE KEY-----`,
    accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgE3j+BzjW2DCES1y4Zsp3TBA6MlJ
    7zxTm778d7/ORS77F7eaYhc0a5WujaNXD3YONqn546GD/8bslgFgFtiOXDxNmWXa
    03oy07VuV9v7bzCddWZuXNHLgbS7BXUXgOZ5GoSMWgHYB6gT01ewbeQg9EyrlwQ/
    ChtGkPzjuMmqV2e1AgMBAAE=
    -----END PUBLIC KEY-----`,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,
  };