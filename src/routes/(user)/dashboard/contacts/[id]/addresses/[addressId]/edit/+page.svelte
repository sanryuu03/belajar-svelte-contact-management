<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { alertSuccess, alertError } from "$lib/alert";
  import { addressDetail, addressUpdate } from "$lib/api/AddressApi";
  import { contactDetail } from "$lib/api/ContactApi";
  import { onMount } from "svelte";

    const token = localStorage.getItem('token')
    const {id, addressId} = page.params
    let contact = $state({
        id:id,
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    })

    let address = $state({
        street:'',
        city:'',
        province:'',
        country:'',
        postal_code:''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await addressUpdate(token, id, addressId, address)
        const responseBody = await response.json()
        console.log(responseBody);

        if (response.status === 200) {
            await alertSuccess('Address updated successfully.')
        } else {
            await alertError(responseBody.errors)
        }
    }

    async function fetchAddress() {
        const response = await addressDetail(token, id, addressId)
        const responseBody = await response.json()
        console.log(responseBody);

        if (response.status === 200) {
            address = responseBody.data
        } else {
            await alertError(responseBody.errors)
        }
    }

    async function fetchContact() {
        const response = await contactDetail(token, id)
        const responseBody = await response.json()
        console.log(responseBody);

        if (response.status === 200) {
            contact = responseBody.data
        } else {
            await alertError(responseBody.errors)
        }
    }

    onMount(async () => {
        await fetchContact()
        await fetchAddress()
    })
</script>

<div class="flex items-center mb-6">
            <a href="/dashboard/contacts/{contact.id}" class="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                <i class="fas fa-arrow-left mr-2"></i> Back to Contact Details
            </a>
            <h1 class="text-2xl font-bold text-white flex items-center">
                <i class="fas fa-map-marker-alt text-blue-400 mr-3"></i> Edit Address
            </h1>
        </div>

        <div class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
            <div class="p-8">
                <!-- Contact Information -->
                <div class="mb-6 pb-6 border-b border-gray-700">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                            <i class="fas fa-user text-white"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-semibold text-white">{contact.first_name} {contact.last_name}</h2>
                            <p class="text-gray-300 text-sm">{contact.email} • {contact.phone}</p>
                        </div>
                    </div>
                </div>

                <form onsubmit={handleSubmit}>
                    <div class="mb-5">
                        <label for="street" class="block text-gray-300 text-sm font-medium mb-2">Street</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fas fa-road text-gray-500"></i>
                            </div>
                            <input type="text" id="street" name="street"
                                class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                placeholder="Enter street address" bind:value={address.street} required>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label for="city" class="block text-gray-300 text-sm font-medium mb-2">City</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-city text-gray-500"></i>
                                </div>
                                <input type="text" id="city" name="city"
                                    class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Enter city" bind:value={address.city} required>
                            </div>
                        </div>
                        <div>
                            <label for="province" class="block text-gray-300 text-sm font-medium mb-2">Province/State</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-map text-gray-500"></i>
                                </div>
                                <input type="text" id="province" name="province"
                                    class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Enter province or state" bind:value={address.province} required>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                        <div>
                            <label for="country" class="block text-gray-300 text-sm font-medium mb-2">Country</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-flag text-gray-500"></i>
                                </div>
                                <input type="text" id="country" name="country"
                                    class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Enter country" bind:value={address.country} required>
                            </div>
                        </div>
                        <div>
                            <label for="postal_code" class="block text-gray-300 text-sm font-medium mb-2">Postal Code</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-mail-bulk text-gray-500"></i>
                                </div>
                                <input type="text" id="postal_code" name="postal_code"
                                    class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Enter postal code" bind:value={address.postal_code} required>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-4">
                        <a href="/dashboard/contacts/{contact.id}"
                            class="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                            <i class="fas fa-times mr-2"></i> Cancel
                        </a>
                        <button type="submit"
                            class="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center">
                            <i class="fas fa-save mr-2"></i> Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>