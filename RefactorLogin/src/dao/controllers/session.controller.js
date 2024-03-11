import UserDTO from "../dtos/user.dto.js";

export const getCurrentUser = (req, res) => {
    const user = new UserDTO(req.user);
    res.send(user.getCurrentUser());
}