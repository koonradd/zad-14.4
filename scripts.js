var movies = [
  {
    id: 1, 
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
  },
  {
    id: 3,
    title: 'Film 3',
    desc: 'Film o js',
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
  },
  {
    id: 4,
    title: 'Film 4',
    desc: 'Film o js',
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
  },
  {
    id: 5,
    title: 'Film 5',
    desc: 'Film o js',
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
  }
  ];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
      );
});


var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
       );

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
		React.createElement('div', {key: this.props.movie.id},
                React.createElement('li', {})
               )
	)
	},
});
		
var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired, 
	},
	render: function() {
		return (React.createElement('h2', {}, this.props.title)
		)
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
		React.createElement('div', {},
		React.createElement('p', {}, this.props.movie.desc)
			)
		)
	}
});


var MovieList = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return React.createElement('ul', {}, 
		React.createElement('li', {}, this.props.movie.id),
		React.createElement('li', {}, this.props.movie.title),
		React.createElement('li', {}, this.props.movie.desc)	
		)
	}
});

ReactDOM.render(element, document.getElementById('app'));
