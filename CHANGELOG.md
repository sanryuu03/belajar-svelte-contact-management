# Release Notes

## v1.0.12 (2025-07-13)

- src/lib/api/ContactApi.js => add contactDetail and contactUpdate
- src/routes/(user)/dashboard/contacts/[id]/edit/+page.svelte

## v1.0.11 (2025-07-13)

- src/lib/alert.js => add alertConfirm
- src/lib/api/ContactApi.js => add contactDelete
- src/routes/(user)/dashboard/contacts/+page.svelte => add handleDeleteContact

## v1.0.10 (2025-07-09)

- src/routes/(user)/dashboard/contacts/+page.svelte => add totalPage, pages, handlePageChange and revisi handleSearch and Pagination

## v1.0.9 (2025-07-09)

- src/routes/(user)/dashboard/contacts/+page.svelte => add handleSearch

## v1.0.8 (2025-07-09)

- src/lib/api/ContactApi.js => add contactList
- src/routes/(user)/dashboard/contacts/+page.svelte

## v1.0.7 (2025-07-09)

- src/lib/api/ContactApi.js
- src/routes/(user)/dashboard/contacts/create/+page.svelte

## v1.0.6 (2025-07-09)

- src/lib/api/UserApi.js => add userLogout
- src/routes/(user)/dashboard/users/logout/+page.svelte

## v1.0.5 (2025-07-09)

- src/lib/api/UserApi.js => add userDetail, userUpdateName and userUpdatePassword
- src/routes/(user)/dashboard/users/profile/+page.svelte

## v1.0.4 (2025-06-24)

- src/routes/(user)/+layout.svelte
- src/routes/(user)/dashboard/contacts/+page.svelte

## v1.0.3 (2025-06-21)

- src/routes/(default)/login/+page.svelte
- src/lib/api/UserApi.js => add userLogin

## v1.0.2 (2025-06-13)

- npm install sweetalert2
- src/app.html => ambil head dari web-template-contact-management/register.html
- src/lib/alert.js
- src/lib/api/UserApi.js
- src/routes/(default)/+layout.svelte => dari <body class="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-900 to-gray-800"> ubah jadi div
- src/routes/(default)/register/+page.svelte => isi dibawah body register.html

## v1.0.1 (2025-06-09)

- disable SSR (Server Side Rendering)
- src/routes/+layout.js

## v1.0.0 (2025-06-07)

belajar svelte contact management.

- buat folder belajar-svelte-contact-management