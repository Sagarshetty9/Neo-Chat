export function validateSearch(req, res, next) {
      const { username } = req.query;

  if (!username || username.length < 2) {
    throw new Error("Enter atleast 2 characters to search an user!");
  }

  req.validatedData = {searchQuery : username};

  next();
}
