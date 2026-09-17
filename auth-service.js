const jwt = require('jsonwebtoken');

// WARNING: Hardcoded secret for testing
const JWT_SECRET = "super_secret_admin_key_12345";

/**
 * Authenticates a user and generates a JWT token
 */
function loginUser(username, password) {
  if (username === "admin" && password === "admin123") {
    // Insecure token creation without expiration
    const token = jwt.sign({ user: username, role: "admin" }, JWT_SECRET);
    return { status: 200, token: token };
  }
  
  return { status: 401, error: "Invalid credentials" };
}

module.exports = { loginUser };
