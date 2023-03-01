const get = require('./Get');
const post = require('./Post');

const PORT = 5000;

get.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
post.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});