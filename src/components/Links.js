import React from 'react';

class Home extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Welcome, {user.name}</h1>
        {/* Other content */}
      </div>
    );
  }
}

export default Home;
