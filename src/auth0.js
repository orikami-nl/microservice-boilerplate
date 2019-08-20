module.exports = {
  // orikami.eu.auth0.com
  publickey: `-----BEGIN CERTIFICATE-----
MIIDAzCCAeugAwIBAgIJD4Z2X9+++wcAMA0GCSqGSIb3DQEBCwUAMB8xHTAbBgNV
BAMTFG9yaWthbWkuZXUuYXV0aDAuY29tMB4XDTE3MDgwMjEyMTkwNVoXDTMxMDQx
MTEyMTkwNVowHzEdMBsGA1UEAxMUb3Jpa2FtaS5ldS5hdXRoMC5jb20wggEiMA0G
CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDuZoH8o0YkYhKWoqPYiy+5i/96/qs1
mDtESo9AxZqJCMgWyg+zEXmHy8k/qCAcU68F9+Zy106m129r9rVGEJV/0u0I5b+I
z/jIC1gzmGPRgmhE8ODODhmrXY7bumzFT7brJiTI0/uFBzjStPLuGrlddYTmGLfs
nZZOp3dmu7pRn9cNxwekD6rll8MifQzYSpHBFKPcDPxK5L14CWZ7hqr6Mt6kEYPS
COG9pfRp/9/2eSLJ+k4lQeDN/KOMaH+1+p5OIhXPXsLIC5z9TQJbKd/n+e3DBSt9
hSphXg9BpZmQRBwFQxzymIJLxlc8LXxBhMO6Sw37gbYU/IRWFZqsDjebAgMBAAGj
QjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFJsLRR12jbK+tmwvLUkvaFuA
mmp+MA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAXrxKvohzRIeL
VdHsfmCanmuraiOSrHABX3efjz8nNabZgiC5R0qYX5cBT7aqxrrgt96RAjOXyKJm
Mh06K8SbC7Ig/Lbvz1Q3i/iyyQMhSSVPHoN8jm3m1MdMUAsWpyjiyhNCn5w/g2U+
bsVxerYjOJaI6eyPXmJK0vZ7sJqK2KdkfdVJagZKrJVP9LFE5Y7zeuqjk9ZJ5+B7
TT312JcW3h6oUOExMzTX8eZP06NvRnz9SAtuh7oTwRqxBbzWFsYnD7u17xIopFBJ
p6+hhDVTEKknOvR6fL+tJ4/yBM3kOH0ltgEIMXZZ5PJU7hWH2wBSHb58yqoXFTX3
fKatc8BH/Q==
-----END CERTIFICATE-----
`,
  roles: {
    key: "https://orikami-api.nl/roles",
    // allowed: ['developer'],
  },
  jwt: {
    algorithms: ["RS256"]
    // audience: "https://orikami-api.nl/v1/",
    // ignoreExpiration: false
    // issuer: "",
    // subject: "",
    // maxAge: "",
    // clockTolerance: 10
  }
};
