import axios from 'axios';

class GetUserRandom {

  public __invoke = async () => {
    try {
      const request = await axios.get("https://randomuser.me/api/");
      const data = request.data;

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default GetUserRandom;