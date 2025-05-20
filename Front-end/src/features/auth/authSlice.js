import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Nouvelle action pour récupérer le profil
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (_, { getState }) => {
      const { token } = getState().auth
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
      const data = await response.json()

      if (!response.ok) {
          throw new Error(data.message)
      }

      return data.body
  }
)


// Action pour la connexion (déjà existante)
export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        
        if (!response.ok) {
            throw new Error(data.message)
        }
        
        localStorage.setItem('token', data.body.token)
        return data.body.token
    }
)

// Nouvelle action pour la mise à jour du profil
export const updateUserProfile = createAsyncThunk(
    'auth/updateProfile',
    async (userData, { getState }) => {
        const { token } = getState().auth
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message)
        }

        return data.body
    }
)

// Notre slice avec l'ajout des nouveaux cas
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        isLoading: false,
        isAuthenticated: !!localStorage.getItem('token'),
        user: null,
        error: null
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            state.token = null
            state.isAuthenticated = false
            state.user = null
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            // Login cases
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuthenticated = true
                state.token = action.payload
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isAuthenticated = false
                state.error = action.error.message
            })
            // Fetch Profile cases
            .addCase(fetchUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload; 
                state.error = null;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            // Update Profile cases
            .addCase(updateUserProfile.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.error = null
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer