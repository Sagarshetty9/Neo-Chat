export function validateSearch(req, res, next) {
  const { username } = req.query;


  if (!username.trim() || username.length < 1) {
    throw new Error("Enter at least 1 characters to search");
  }

  req.validatedData = { searchQuery: username };
  next();
}