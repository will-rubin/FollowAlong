import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { type User, getUserByEmail } from './users'
import * as myFetch from './myFetch'

const toast = useToast()

const router = useRouter()
const session = reactive({
    user: null as User | null,
    redirectURL: null as string | null,
    messages: [] as { type: string, text: string }[],
    loading: 0
})

export function api(action: string, body?: unknown, method?: string) {
    session.loading++, //increment the loading counter
    showErrors('api() is deprecated. Use myFetch.api() instead.')
    return myFetch.api(`${action}`)
      .catch(err => showErrors(err))
      .finally(() => session.loading--) //decrement the loading counter
}

export function getSession() {
    return session
}

export function showErrors(err: string | { message: string }) {
    console.error(err)
    session.messages.push({ type: 'error', text: typeof err === 'string' ? err : err.message})
    if (typeof err === 'string') {
        toast.error(err)
    } else {
        toast.error(err.message)
    }
}

export function useLogin(){
    
    return {
        async login(email: string, password: string): Promise<User | null> {
            session.user = await api('users/login', { email, password })
            router.push(session.redirectURL ?? '/')
            return session.user
        },
        logout() {
            session.user = null
            router.push('/login')
        }
    }
}
