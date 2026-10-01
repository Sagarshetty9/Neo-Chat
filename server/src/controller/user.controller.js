import UserModel from "../model/user.model.js";

export const searchUser = async (req, res, next) => {
  try {
    const { searchQuery } = req.validatedData;

    const users = await UserModel.find(
      { username: { $regex: searchQuery, $options: "i" } },
      { username: 1 }
    );

    if (users.length === 0) {
      return res.status(200).json({ 
        success: true, 
        users: []  // Empty array, no error
      });
    }

    return res.status(200).json({
      success: true,
      message: "Search successful!",
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserDetails = async (req, res, next) => {
  try {
    const token = req.decodedToken;

    const user = await UserModel.findById(token.id).populate("contacts");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
      message: "User details fetched successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const addContact = async (req, res, next) => {
  try {
    const token = req.decodedToken;
    const { contactId } = req.body;

    const user = await UserModel.findById(token.id);
    const targetUser = await UserModel.findById(contactId);

    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.contacts.includes(targetUser._id)) {
      return res.status(409).json({
        success: false,
        message: "Already in contacts",
      });
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
        username: targetUser.username,
      },
    });
  } catch (error) {
    next(error);
  }
};