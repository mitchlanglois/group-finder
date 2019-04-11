import { Mutation } from 'react-apollo'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { CREATE_POST_MUTATION } from '../lib/mutations'
import { FEED_QUERY } from '../lib/queries'
import { useFormInput } from '../lib/customHooks'

import Error from './Error'

const styles = (theme) => ({
  fieldset: {
    border: 'none'
  },
  input: {
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
})

const PostForm = ({ classes }) => {
  const title = useFormInput('')
  const content = useFormInput('')

  const submitForm = async (e, createPost) => {
    e.preventDefault()
    await createPost()
    resetForm()
  }
  const resetForm = () => {
    title.reset()
    content.reset()
  }

  return (
    <Mutation
      mutation={CREATE_POST_MUTATION}
      variables={{ title: title.value, content: content.value }}
      refetchQueries={[{ query: FEED_QUERY }]}
    >
      {(createPost, { error, loading }) => {
        return (
          <form method="post" onSubmit={e => submitForm(e, createPost)}>
            <fieldset disabled={loading} aria-busy={loading} className={classes.fieldset}>
              <Error error={error} />
              <TextField
                fullWidth
                required
                className={classes.input}
                id="title"
                label="Title"
                value={title.value}
                onChange={title.onChange}
                margin="normal"
              />
              <TextField
                fullWidth
                required
                className={classes.input}
                id="content"
                label="Content"
                value={content.value}
                onChange={content.onChange}
                margin="normal"
              />
              <Button className={classes.submit} color="primary" variant="contained" type="submit">Create post</Button>
            </fieldset>
          </form>
        )
      }}
    </Mutation>
  )
}

export default withStyles(styles)(PostForm)
