import axios from 'axios';

class GetUserRandom {

  public __invoke = async () => {
    const request = await axios.get("https://randomuser.me/api/");
    const data = request.data;

    return data.results[0];
  }
}

export default GetUserRandom;