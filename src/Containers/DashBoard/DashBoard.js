import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DashBoardComponent from "../../Component/DashBoard/DashBoard";

// Allow Props in DashBoard Component
const mapStateToProps = state => {
    return {}
}

// Allow Props Functions in DashBoard Component
const mapDispatchToProps = dispatch => {
    return {}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoardComponent));
