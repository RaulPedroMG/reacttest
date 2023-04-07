import React from "react";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useState } from 'react';

/*import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';*/

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

/*import Container from '@mui/material/Container';*/
//import Button from '@mui/material/Button';
/*import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';*/
//import Alert from '@mui/material/Alert';
/*import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';*/

//import Box from '@mui/joy/Box';
/*import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';*/

/*import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Icon from '@material-ui/core/Icon';*/
//import Icon from '@material-ui/icons';
//import Icon from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

/*const Item = styled(Sheet)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.vars.palette.text.tertiary,
}));*/

function App() {
	const [show, setShow] = useState(true);
	return (
		<div className="App">
			<header className="App-header">
				

				{/*<Card variant="solid" color="primary" invertedColors>…</Card>*/}

				{/*<Sheet variant="soft" color="info" invertedColors>…</Sheet>*/}

				<p className="edit">
					Iconos Material Icons
				</p>
				{/*<span className="material-icons">face</span>*/}
				<img src={logo} className="App-logo" alt="logo" />
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				{/*<p className="edit">
					Iconos React Icons Fa
				</p>
				<FaHeart style={{color: 'white', fontSize: '20px'}}/><br/>
				<FaRegHeart style={{color: 'green', fontSize: '20px'}}/>*/}
				{/*<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>*/}
				<p className="edit">
					React - Bootstrap
				</p>
				
				<Container>
					{<Stack direction="horizontal" gap={2} className="justify-content-center">
						<Button as="a" variant="primary">
							Button as link
						</Button>
						<Button as="a" variant="success">
							Button as link
						</Button>
					</Stack>}
				</Container>
				<p></p>
				<p className="">Or right-aligned</p>
				<p></p>
				<Container>
					{/*
						<div class="alert alert-danger alert-dismissible fade show" role="alert">
							<strong>Oh snap! You got an error!</strong>
							<p>
								Change this and that and try again.
							</p>
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					*/}
					
					<>
						<Alert show={show} variant="success">
							<Alert.Heading>How's it going?!</Alert.Heading>
							<p>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
							lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
							fermentum.
							</p>
							<hr />
							<div className="d-flex justify-content-end">
							<Button onClick={() => setShow(false)} variant="outline-success">
								Close me y'all!
							</Button>
							</div>
						</Alert>

						{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
					</>
				</Container>
				<p></p>
				<Container>
					<Row>
						<Col sm={8} bg="primary">sm=8</Col>
						<Col sm={4} bg="secondary">sm=4</Col>
					</Row>
					<Row>
						<Col sm>sm=true</Col>
						<Col sm>sm=true</Col>
						<Col sm>sm=true</Col>
					</Row>
				</Container>
				<p></p>
				{/*
				<p className="edit">
					Iconos FontAwesome
				</p>
				<i class="fas fa-user"></i><br/>
				<i class="far fa-user"></i><br/>
				<i class="fab fa-github-square"></i><br/>
				<p className="edit">
					ReactJS en Windows
				</p>
				<Icon className="fa fa-plus-circle MuiIcon-colorSecundary"/>

				<p className="edit">
					Material Desing
				</p>
				<Container maxWidth="md">
					<Box sx={{ width: '100%', height: '140px', color: '#fff', '& > .MuiBox-root > .MuiBox-root': { p: 1, borderRadius: 2, fontSize: '0.875rem', fontWeight: '700', }, }}>
					<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, gridTemplateRows: 'auto', gridTemplateAreas: `"header header header header" "main main . sidebar" "footer footer footer footer"`, }}>
						<Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
						<Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
						<Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
						<Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
						</Box>
					</Box>
				</Container>
					
				
				<Button variant="contained">Hello World</Button><br/>
				<Button variant="text">Text</Button><br/>
				<Button variant="contained">Contained</Button><br/>
				<Button variant="outlined">Outlined</Button><br/>
				<Autocomplete disablePortal id="combo-box-demo" options={top100Films} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Movie" />} />
			
				<Container maxWidth="md">
					<Grid container spacing={2} sx={{ flexGrow: 1 }}>
						<Grid xs={8}>
							<Item>xs=8</Item>
						</Grid>
						<Grid xs={4}>
							<Item>xs=4</Item>
						</Grid>
						<Grid xs={4}>
							<Item>xs=4</Item>
						</Grid>
						<Grid xs={8}>
							<Item>xs=8</Item>
						</Grid>
					</Grid>

					<Stack sx={{ width: '100%' }} spacing={2}>
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							This is an error alert — <strong>check it out!</strong>
						</Alert>
						<Alert severity="warning">
							<AlertTitle>Warning</AlertTitle>
							This is a warning alert — <strong>check it out!</strong>
						</Alert>
						<Alert severity="info">
							<AlertTitle>Info</AlertTitle>
							This is an info alert — <strong>check it out!</strong>
						</Alert>
						<Alert severity="success">
							<AlertTitle>Success</AlertTitle>
							This is a success alert — <strong>check it out!</strong>
						</Alert>
					</Stack>
				</Container>
				<ul className='testlist'>
					<li>Ejemplo lista</li>
				</ul>*/}
			</header>
		</div>
		);
}

export default App;

/*const top100Films = [
	{ label: 'The Shawshank Redemption', year: 1994 },
	{ label: 'The Godfather', year: 1972 },
	{ label: 'The Godfather: Part II', year: 1974 },
	{ label: 'The Dark Knight', year: 2008 },
	{ label: '12 Angry Men', year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: 'Pulp Fiction', year: 1994 },
	{
	  label: 'The Lord of the Rings: The Return of the King',
	  year: 2003,
	},
	{ label: 'The Good, the Bad and the Ugly', year: 1966 },
	{ label: 'Fight Club', year: 1999 },
	{
	  label: 'The Lord of the Rings: The Fellowship of the Ring',
	  year: 2001,
	},
	{
	  label: 'Star Wars: Episode V - The Empire Strikes Back',
	  year: 1980,
	},
	{ label: 'Forrest Gump', year: 1994 },
	{ label: 'Inception', year: 2010 },
	{
	  label: 'The Lord of the Rings: The Two Towers',
	  year: 2002,
	},
	{ label: "One Flew Over the Cuckoo's Nest", year: 1975 },
	{ label: 'Goodfellas', year: 1990 },
	{ label: 'The Matrix', year: 1999 },
	{ label: 'Seven Samurai', year: 1954 },
	{
	  label: 'Star Wars: Episode IV - A New Hope',
	  year: 1977,
	},
	{ label: 'City of God', year: 2002 },
	{ label: 'Se7en', year: 1995 },
	{ label: 'The Silence of the Lambs', year: 1991 },
	{ label: "It's a Wonderful Life", year: 1946 },
	{ label: 'Life Is Beautiful', year: 1997 },
	{ label: 'The Usual Suspects', year: 1995 },
	{ label: 'Léon: The Professional', year: 1994 },
	{ label: 'Spirited Away', year: 2001 },
	{ label: 'Saving Private Ryan', year: 1998 },
	{ label: 'Once Upon a Time in the West', year: 1968 },
	{ label: 'American History X', year: 1998 },
	{ label: 'Interstellar', year: 2014 },
	{ label: 'Casablanca', year: 1942 },
	{ label: 'City Lights', year: 1931 },
	{ label: 'Psycho', year: 1960 },
	{ label: 'The Green Mile', year: 1999 },
	{ label: 'The Intouchables', year: 2011 },
	{ label: 'Modern Times', year: 1936 },
	{ label: 'Raiders of the Lost Ark', year: 1981 },
	{ label: 'Rear Window', year: 1954 },
	{ label: 'The Pianist', year: 2002 },
	{ label: 'The Departed', year: 2006 },
	{ label: 'Terminator 2: Judgment Day', year: 1991 },
	{ label: 'Back to the Future', year: 1985 },
	{ label: 'Whiplash', year: 2014 },
	{ label: 'Gladiator', year: 2000 },
	{ label: 'Memento', year: 2000 },
	{ label: 'The Prestige', year: 2006 },
	{ label: 'The Lion King', year: 1994 },
	{ label: 'Apocalypse Now', year: 1979 },
	{ label: 'Alien', year: 1979 },
	{ label: 'Sunset Boulevard', year: 1950 },
	{
	  label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
	  year: 1964,
	},
	{ label: 'The Great Dictator', year: 1940 },
	{ label: 'Cinema Paradiso', year: 1988 },
	{ label: 'The Lives of Others', year: 2006 },
	{ label: 'Grave of the Fireflies', year: 1988 },
	{ label: 'Paths of Glory', year: 1957 },
	{ label: 'Django Unchained', year: 2012 },
	{ label: 'The Shining', year: 1980 },
	{ label: 'WALL·E', year: 2008 },
	{ label: 'American Beauty', year: 1999 },
	{ label: 'The Dark Knight Rises', year: 2012 },
	{ label: 'Princess Mononoke', year: 1997 },
	{ label: 'Aliens', year: 1986 },
	{ label: 'Oldboy', year: 2003 },
	{ label: 'Once Upon a Time in America', year: 1984 },
	{ label: 'Witness for the Prosecution', year: 1957 },
	{ label: 'Das Boot', year: 1981 },
	{ label: 'Citizen Kane', year: 1941 },
	{ label: 'North by Northwest', year: 1959 },
	{ label: 'Vertigo', year: 1958 },
	{
	  label: 'Star Wars: Episode VI - Return of the Jedi',
	  year: 1983,
	},
	{ label: 'Reservoir Dogs', year: 1992 },
	{ label: 'Braveheart', year: 1995 },
	{ label: 'M', year: 1931 },
	{ label: 'Requiem for a Dream', year: 2000 },
	{ label: 'Amélie', year: 2001 },
	{ label: 'A Clockwork Orange', year: 1971 },
	{ label: 'Like Stars on Earth', year: 2007 },
	{ label: 'Taxi Driver', year: 1976 },
	{ label: 'Lawrence of Arabia', year: 1962 },
	{ label: 'Double Indemnity', year: 1944 },
	{
	  label: 'Eternal Sunshine of the Spotless Mind',
	  year: 2004,
	},
	{ label: 'Amadeus', year: 1984 },
	{ label: 'To Kill a Mockingbird', year: 1962 },
	{ label: 'Toy Story 3', year: 2010 },
	{ label: 'Logan', year: 2017 },
	{ label: 'Full Metal Jacket', year: 1987 },
	{ label: 'Dangal', year: 2016 },
	{ label: 'The Sting', year: 1973 },
	{ label: '2001: A Space Odyssey', year: 1968 },
	{ label: "Singin' in the Rain", year: 1952 },
	{ label: 'Toy Story', year: 1995 },
	{ label: 'Bicycle Thieves', year: 1948 },
	{ label: 'The Kid', year: 1921 },
	{ label: 'Inglourious Basterds', year: 2009 },
	{ label: 'Snatch', year: 2000 },
	{ label: '3 Idiots', year: 2009 },
	{ label: 'Monty Python and the Holy Grail', year: 1975 },
  ];*/