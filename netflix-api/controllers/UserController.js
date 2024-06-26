const User = require("../models/UserModel")

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => (id === data.id));

      if (!movieAlreadyLiked) {
        await User.findOneAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      }
      else{
        return res.json({msg: "movie already added to the liked list"})
      }
    }
    else{
      await User.create({email,likedMovies: [data]})
    }
    return res.json({msg: "movie added successfully"})
  } catch (error) {
    return res.json({ msg: "error adding movie" });
  }
};

module.exports.getLikedMovies = async() => {
  try{
    const {email} = req.params
    const user = await User.findOne({email})
    if(user){
      return res.json({msg:"success",movies: user.likedMovies})
    }
    else return res.json({msg: "user with given email not found"})
  }
  catch(error){
    res.json({msg: "cannot fetch movies"})
  }
}