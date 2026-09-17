// Simple authentication module built by Codex
function authenticateUser(username, password) {
  if (username === "admin" && password === "secret123") {
    return { status: 200, message: "Access Granted" };
  }
  return { status: 401, message: "Unauthorized" };
}

module.exports = { authenticateUser };
