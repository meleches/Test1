import React, { useState } from 'react';
import { TextField,  Button, Container, Paper} from '@material-ui/core';
import { useLocation , useHistory} from 'react-router-dom';
import useStyles from './styles';
import axios from 'axios';

const updateURL = 'http://localhost:3000/books/update/';
const deleteURL = 'http://localhost:3000/books/delete/'

const BookDetail = (  ) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const data =  location.state?.data;
    
    const [book,setBook] = useState({
        title: data.title,
        author:data.author,
        editure:data.editure,
        description:data.description,
        avg_grade:data.avg_grade,
        pages:data.pages,
        reviews:data.reviews,
        publish_date:data.publish_date
    });

    const postBook =  (event) => {
        event.preventDefault();
        axios.patch(updateURL + data._id,
            book
            ).then( (res) => console.log(res)).catch( (e) => e)   
    }
    
    const handleDelete = () =>{
        axios.delete(deleteURL + data._id).then( (res) => console.log(res)).catch( (e) => console.log(e));
        history.push('/');
    }
    
    return (
        
         <Container >
            <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off"
            onSubmit={postBook}
            >
        <TextField
            name="title" 
            variant='outlined'
            fullWidth
            label="Title"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value})}
            />
            <TextField
            name="author" 
            variant='outlined'
            fullWidth
            label="Author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value})}
            />
            <TextField
            name="publishing_house" 
            variant='outlined'
            fullWidth
            label="Publishing House"
            value={book.editure}
            onChange={(e) => setBook({ ...book, editure: e.target.value})}
            />
            <TextField
            name="description" 
            variant='outlined'
            fullWidth
            label="Description"
            multiline
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value})}
            />
            <TextField
            name="grade" 
            variant='outlined'
            fullWidth
            label="Grade"
            value={book.avg_grade}
            onChange={(e) => setBook({ ...book, avg_grade: e.target.value})}
            />
            <TextField
            name="pages" 
            variant='outlined'
            fullWidth
            label="Pages"
            value={book.pages}
            onChange={(e) => setBook({ ...book, pages: e.target.value})}
            />
            <TextField
            name="reviews" 
            variant='outlined'
            fullWidth
            label="Reviews"
            value={book.reviews}
            onChange={(e) => setBook({ ...book, reviews: e.target.value})}
            />
            <TextField
            name="publish-date" 
            variant='outlined'
            fullWidth
            label="Publish Date"
            value={book.publish_date}
            onChange={(e) => setBook({ ...book, publish_date: e.target.value})}
            />

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            >Update</Button>
            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='button'
            onClick={ () => handleDelete()}
            >Delete</Button>
            
            </form>

            </Paper>

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => history.push('/')}
            >Get Back</Button>
        </Container>
        
    );
}

export default BookDetail;