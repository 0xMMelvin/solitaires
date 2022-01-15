import { FC } from 'react'
import { createStyles, Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    splash: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
)

export const Splash: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.splash}>
      <Typography variant={`h1`} color={`primary`}>
        Coming Soon...
      </Typography>
    </div>
  )
}
