import UserModel from "../model/user.model.js";

export const searchUser = async (req, res) => {
  const { searchQuery } = req.validatedData;

  const user = await UserModel.find(
    { username: { $regex: searchQuery, $options: "i" } },
    { username: 1 }, //returns array of users with fields username, id,
  );

  if (user.length === 0) {
    throw new Error("User not found!");
  }

  return res
    .status(200)
    .json({ success: true, message: "Search successfull!", user });
};

export const getUserDetails = async (req, res) => {
  const token = req.decodedToken;

  const user = await UserModel.findById(token.id);

  if (!user) {
    throw new Error("You are not authorized to make this query!");
  }

  return res.status(200).json({
     success: true,
    user,
    message: "User details fetched successfully!", //TODO>> Make it send only required data and populate the data
  });
};

export const addContact = async (req, res) => {
  const token = req.decodedToken;
  const { contactId } = req.body;

  const user = await UserModel.findById(token.id);
  const targetUser = await UserModel.findById(contactId);

  if (!targetUser) {
    throw new Error("User not found!");
  }

  if (user.contacts.includes(targetUser._id)) {
    throw new Error("Already in contacts!");
  }

  console.log(user);
  console.log(targetUser);

  user.contacts.push(targetUser._id);
  targetUser.contacts.push(user._id);

  await user.save();
  await targetUser.save();

  return res.status(200).json({success: true , message: "Added to contatcts successfully"})
};
