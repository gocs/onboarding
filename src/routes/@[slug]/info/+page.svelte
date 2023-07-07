<script lang="ts">
    import type { PageData } from "./$types.js";

    export let data: PageData;
</script>

<div class="flex flex-col gap-2">
    <div class="divider">Employee Information</div>
    <div class="flex flex-wrap gap-2">
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">First Name</span>
                <input
                    bind:value={data.employee.firstname}
                    type="text"
                    placeholder="first name.."
                    class="input input-bordered"
                />
            </label>
        </div>

        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Middle Name</span>
                <input
                    bind:value={data.employee.middle_name}
                    type="text"
                    placeholder="middle name.."
                    class="input input-bordered"
                />
            </label>
        </div>

        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Last Name</span>
                <input
                    bind:value={data.employee.lastname}
                    type="text"
                    placeholder="last name.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Personal Email</span>
                <input
                    bind:value={data.employee.personal_email}
                    type="email"
                    placeholder="personal email.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Phone</span>
                <input
                    bind:value={data.employee.phone}
                    type="email"
                    placeholder="phone.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Birthday</span>
                <input
                    bind:value={data.employee.birthday}
                    type="date"
                    placeholder="birthday.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Street</span>
                <input
                    bind:value={data.employee.street}
                    type="text"
                    placeholder="street.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">City</span>
                <input
                    bind:value={data.employee.city}
                    type="text"
                    placeholder="city.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">State/Province</span>
                <input
                    bind:value={data.employee.province_state}
                    type="text"
                    placeholder="state/province.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Postal Code</span>
                <input
                    bind:value={data.employee.postal_code}
                    type="text"
                    placeholder="postal code.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Country</span>
                <input
                    bind:value={data.employee.country}
                    type="text"
                    placeholder="country.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Department</span>
                <input
                    bind:value={data.employee.department}
                    type="text"
                    placeholder="department.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Role</span>
                <input
                    bind:value={data.employee.role}
                    type="text"
                    placeholder="role.."
                    class="input input-bordered"
                />
            </label>
        </div>
        <div class="form-control w-[175px]">
            <label class="input-group input-group-vertical">
                <span class="py-1">Position</span>
                <input
                    bind:value={data.employee.position}
                    type="text"
                    placeholder="position.."
                    class="input input-bordered"
                />
            </label>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="form-control">
            <button class="btn btn-primary">Save</button>
        </div>
    </div>
</div>
