import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import firebase from 'firebase'

const useStyles = makeStyles (theme=>({
    root:{
        flexGrow:1
    },
    
    paper: {
        paddingBottom:50,
    },
    message:{
        border: '1px solid #ccc',
        borderRadius: 8,
        padding:'0 20px'
    },
    box:{
        height: '100%',
        paddingLeft: '20px'
    }
}))

const AddMessage = () => {
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const handleSubmit= (e)=>{
        e.preventDefault()
    } 
    return ( 

        <Paper square className= {classes.paper}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={0} direction='row' className={classes.message}>
                    <Grid item sx={10}>
                        <Grid item xs={12} >
                            <TextField
                                margin='normal'
                                autoComplete='fname'
                                //opcionales
                                name='name'
                                variant='outlined'
                                //opcionales
                                required
                                fullWidth
                                id='name'
                                label='Name'
                                autoFocus
                                value={message}
                                onChange={e => setMessage(e.target.value) }
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' alignItems='center' className={classes.Box}>
                                <Button variant='contained'
                                        color='primary'
                                        endIcon={<Icon>send</Icon>}
                                        fullWidth
                                        disabled={!message.length}
                                >
                                    send
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </form>
        </Paper>

     )
}
 
export default AddMessage;