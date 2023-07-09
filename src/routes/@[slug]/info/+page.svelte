<script lang="ts">
    import type { PageData } from "./$types.js";

    export let data: PageData;
</script>

<div class="flex flex-col gap-2">
    <div class="divider">Employee Information</div>
    <div class="grid grid-cols-6 grid-flow-row-dense gap-2">
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-4">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
    </div>

    <div class="divider">Address</div>

    <div class="grid grid-cols-6 grid-flow-row-dense gap-2">
        <div class="col-span-4">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
        <div class="col-span-2">
            <div class="form-control">
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
        </div>
    </div>

    <div class="divider">Employment Information</div>

    <div class="grid grid-cols-6 grid-flow-row-dense gap-2">
        <div class="col-span-2">
            <div class="form-control">
                <label class="input-group input-group-vertical">
                    <span class="py-1">Role</span>
                    <select
                        bind:value={data.employee.role}
                        class="select select-bordered"
                    >
                        <option value="admin">Admin</option>
                        <option value="head">Head</option>
                        <option value="employee">Employee</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                <label class="input-group input-group-vertical">
                    <span class="py-1">Branch</span>
                    <select
                        bind:value={data.employee.branch}
                        multiple
                        class="select select-bordered"
                    >
                        <option value="au">AU</option>
                        <option value="ph">PH</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">Active</span>
                    <input
                        type="checkbox"
                        bind:checked={data.employee.is_active}
                        class="checkbox checkbox-primary"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">Employed</span>
                    <input
                        type="checkbox"
                        bind:checked={data.employee.is_employed}
                        class="checkbox checkbox-primary"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-4">
            <div class="form-control">
                <label class="input-group input-group-vertical">
                    <span class="py-1">Position</span>
                    <select
                        bind:value={data.employee.position}
                        class="select select-bordered"
                    >
                        <option selected disabled>position..</option>
                        {#each data.position as position}
                            <option value={position.id}>
                                {position.name}
                            </option>
                        {/each}
                    </select>
                </label>
            </div>
        </div>
        <div class="col-span-3">
            <div class="form-control">
                <label class="input-group input-group-vertical">
                    <span class="py-1">Department</span>
                    <select
                        bind:value={data.employee.department}
                        class="select select-bordered"
                    >
                        <option selected disabled>department..</option>
                        {#each data.department as department}
                            <option value={department.id}>
                                {department.name}
                            </option>
                        {/each}
                    </select>
                </label>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="form-control">
            <button class="btn btn-primary">Save</button>
        </div>
    </div>
</div>

<style>
    /* it is what it is */
    select[multiple] {
        padding: 0;
        height: 0;
    }

    select[multiple]:focus,
    select[multiple]:active {
        overflow-y: scroll;
        height: 100%;
    }

    select[multiple] > option {
        border-radius: 0px;
    }
</style>
