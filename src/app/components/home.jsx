//import {Switch, Route,} from "react-router-dom";
//import Page from "../../../pages/page";
import PhotoManipulationAPI from "../../api/photoManipulation"
import SocialMediaAPI from "../../api/socialMedia";
import RetouchingAPI from "../../api/retouching";
import UiUxAPI from "../../api/ui-ux";

const apiPhoto = new PhotoManipulationAPI()
const apiSocialMedia = new SocialMediaAPI()
const apiRetouching = new RetouchingAPI()
const apiUiux = new UiUxAPI()

const Home = (props) => {

    return (
        {/*<Switch>
            <Route path="/photo-manipulation">
                <Page data={apiPhoto.getAll()} col="3" h="full" sx={props.sx}/>
            </Route>
            <Route path="/retouching">
                <Page data={apiRetouching.getAll()} col="2" h="1750px" sx={props.sx}/>
            </Route>
            <Route path="/social-media">
            <   Page data={apiSocialMedia.getAll()} col="3" h="full" sx={props.sx}/>
            </Route>
            <Route path="/ui-ux-design">
                <Page data={apiUiux.getAll()} col="2"/>
            </Route>
        </Switch>*/}
    )
}

export default Home