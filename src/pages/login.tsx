import { useState } from 'react'
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material'

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里处理登录逻辑
    console.log('登录信息:', formData)
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%'
          }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            登录
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="用户名"
              margin="normal"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <TextField
              fullWidth
              label="密码"
              type="password"
              margin="normal"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} size="large">
              登录
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  )
}

export default LoginPage
