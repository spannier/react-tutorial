'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const sp = React.createElement;

class SPLikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }


        return sp(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Hallo Stephan'
        );
    }
}

const tw = React.createElement;

class TWLikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked the SECOND TestButton.';
        }


        return tw(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Second Testbutton'
        );
    }
}



// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });

const spButton = document.querySelector('#sp_like_button_container');
ReactDOM.render(sp(SPLikeButton), spButton);

const twButton = document.querySelector('#tw_like_button_container');
ReactDOM.render(tw(TWLikeButton), twButton);
