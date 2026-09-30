import UserModel from "../model/user.model.js";

export const searchUser = async (req, res) => {
  const { searchQuery } = req.validatedData;

  const users = await UserModel.find(
    { username: { $regex: searchQuery, $options: "i" } },
    { username: 1 }, //returns array of users with fields username, id,
  );

  if (users.length === 0) {
    throw new Error("User not found!");
  }

  return res
    .status(200)
    .json({ success: true, message: "Search successfull!", users });
};

export const getUserDetails = async (req, res) => {
  const token = req.decodedToken;

  const user = await UserModel.findById(token.id).populate("contacts");

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

  user.contacts.push(targetUser._id);
  targetUser.contacts.push(user._id);

  await user.save();
  await targetUser.save();

  return res.status(200).json({ 
    success: true, 
    message: "Added to contacts successfully",
    contact: {
      _id: targetUser._id,
      username: targetUser.username
    }
  });
};
