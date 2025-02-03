const {createUser,showUsers} =  require("../controller/userController");

const router = express.router();

router.post('/signup',createUser);
router.get('/signup',showUsers)

module.exports = router