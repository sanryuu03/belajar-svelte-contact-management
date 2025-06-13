<script>
import {userRegister} from "$lib/api/UserApi.js"
import {alertSuccess, alertError} from "$lib/alert.js"
import {goto} from "$app/navigation"

 let user=$state({
    username:"",
    password:"",
    confirm_password:"",
    name:""
 })

 async function handleSubmit(e){
    e.preventDefault()

    if(user.password !== user.confirm_password){
        await alertError("Password and confirm password not match")
        return
    }

    const response = await userRegister(user)
    const responseBody = await response.json()
    console.log(responseBody)

    if(response.status === 200){
        await alertSuccess("Success register new user")
        await goto("/login")
    } else{
        await alertError(responseBody.errors)
    }
 }
</script>

    <div class="w-full max-w-md p-8 bg-gray-800 border border-gray-700 animate-fade-in bg-opacity-80 rounded-xl shadow-custom backdrop-blur-sm">
        <div class="mb-8 text-center">
            <div class="inline-block p-3 mb-4 rounded-full bg-gradient">
                <i class="text-3xl text-white fas fa-user-plus"></i>
            </div>
            <h1 class="text-3xl font-bold text-white">Contact Management</h1>
            <p class="mt-2 text-gray-300">Create a new account</p>
        </div>

        <form onsubmit={handleSubmit}>
            <div class="mb-4">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-300">Username</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="text-gray-500 fas fa-user"></i>
                    </div>
                    <input type="text" id="username" name="username"
                        class="w-full py-3 pl-10 pr-3 text-white transition-all duration-200 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Choose a username" required bind:value={user.username}>
                </div>
            </div>

            <div class="mb-4">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="text-gray-500 fas fa-id-card"></i>
                    </div>
                    <input type="text" id="name" name="name"
                        class="w-full py-3 pl-10 pr-3 text-white transition-all duration-200 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name" required bind:value={user.name}>
                </div>
            </div>

            <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="text-gray-500 fas fa-lock"></i>
                    </div>
                    <input type="password" id="password" name="password"
                        class="w-full py-3 pl-10 pr-3 text-white transition-all duration-200 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Create a password" required bind:value={user.password}>
                </div>
            </div>

            <div class="mb-6">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-300">Confirm Password</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="text-gray-500 fas fa-check-double"></i>
                    </div>
                    <input type="password" id="confirm_password" name="confirm_password"
                        class="w-full py-3 pl-10 pr-3 text-white transition-all duration-200 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Confirm your password" required bind:value={user.confirm_password}>
                </div>
            </div>

            <div class="mb-6">
                <button type="submit"
                    class="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5">
                    <i class="mr-2 fas fa-user-plus"></i> Register
                </button>
            </div>

            <div class="text-sm text-center text-gray-400">
                Already have an account?
                <a href="/login" class="font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300">Sign in</a>
            </div>
        </form>
    </div>