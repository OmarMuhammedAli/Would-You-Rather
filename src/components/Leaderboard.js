import { Component } from "react";
import { connect } from "react-redux";
import Contender from "./Contender";

class Leaderboard extends Component {
  render() {
    const { contenders } = this.props;
    return (
      <div className="lb">
        {contenders.map((contender) => (
          <Contender key={contender.id} contender={contender} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  contenders: Object.values(users)
    .map((user) => ({
      ...user,
      points: user.questions.length + Object.keys(user.answers).length,
    }))
    .sort((a, b) => b.points - a.points),
});
export default connect(mapStateToProps)(Leaderboard);
