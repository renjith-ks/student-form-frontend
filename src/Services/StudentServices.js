import axios from 'axios'

const view_all_api_url="http://localhost:8080//Viewall";
const view_all_api_url_save="http://localhost:8080//save";
class StudentServies{
    getusers(){
        return axios.get( view_all_api_url);

    }
    saveall(Student)
    {
        return axios.post(view_all_api_url_save,Student);
    }
}



export default new StudentServies();