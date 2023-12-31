import jwt from 'jsonwebtoken'
const { verify } = jwt

export const auth = (req, res, next) => {
  try {
    const auth_Headers = req.headers.authorization
    const token = auth_Headers.split('Bearer ')[1]
    verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403)
      } else {
        req.id = user.id
      }
    })
    next()
  } catch (error) {
    return res.status(401).json({ errors: 'UnAuthenticated!' })
  }
}
export const merchantAuth = (req, res, next) => {
  try {
    const auth_Headers = req.headers.authorization
    const token = auth_Headers.split('Bearer ')[1]
    verify(token, process.env.MERCHANT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403)
      } else {
        req.id = user.id
      }
    })
    next()
  } catch (error) {
    return res.status(401).json({ errors: 'UnAuthenticated!' })
  }
}

