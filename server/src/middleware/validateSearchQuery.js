export function validateSearch(req, res, next) {
  const { username } = req.query;

  if (!username || username.trim().length < 1) {
    return res.status(400).json({
      success: false,
      message: "Enter at least 1 character to search",
    });
  }

  req.validatedData = { searchQuery: username };
  next();
}