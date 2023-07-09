<script lang="ts">
    import type { PageData } from "./$types.js";
    import type { Employee } from "./+page.js";

    export let data: PageData;
    let subject_employee: Employee = structuredClone(data.employee);
    let showModal = false;
    let showLoading = false;

    async function submit() {
        showModal = false;
        if (JSON.stringify(subject_employee) === JSON.stringify(data.employee))
            return;

        showLoading = true;
        await new Promise((res, rej) => setTimeout(() => res(""), 1000)); // handicap
        await data.pb
            .collection("employee")
            .update(subject_employee.id, subject_employee);
        window.location.href = `/@${data.params.slug}/info`;
        showLoading = false;
    }

    async function reset() {
        subject_employee = structuredClone(data.employee);
    }
</script>

<div class="flex flex-col gap-2">
    <div class="divider">Employee Information</div>
    <div class="grid grid-cols-6 grid-flow-row-dense gap-2">
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.firstname !== subject_employee.firstname}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">First Name</span>
                    <input
                        bind:value={subject_employee.firstname}
                        type="text"
                        placeholder="first name.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.middle_name !== subject_employee.middle_name}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Middle Name</span>
                    <input
                        bind:value={subject_employee.middle_name}
                        type="text"
                        placeholder="middle name.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.lastname !== subject_employee.lastname}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Last Name</span>
                    <input
                        bind:value={subject_employee.lastname}
                        type="text"
                        placeholder="last name.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-4">
            <div class="form-control">
                {#if data.employee.personal_email !== subject_employee.personal_email}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Personal Email</span>
                    <input
                        bind:value={subject_employee.personal_email}
                        type="email"
                        placeholder="personal email.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.phone !== subject_employee.phone}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Phone</span>
                    <input
                        bind:value={subject_employee.phone}
                        type="email"
                        placeholder="phone.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.birthday !== subject_employee.birthday}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Birthday</span>
                    <input
                        bind:value={subject_employee.birthday}
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
                {#if data.employee.street !== subject_employee.street}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Street</span>
                    <input
                        bind:value={subject_employee.street}
                        type="text"
                        placeholder="street.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.city !== subject_employee.city}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">City</span>
                    <input
                        bind:value={subject_employee.city}
                        type="text"
                        placeholder="city.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.province_state !== subject_employee.province_state}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">State/Province</span>
                    <input
                        bind:value={subject_employee.province_state}
                        type="text"
                        placeholder="state/province.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.postal_code !== subject_employee.postal_code}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Postal Code</span>
                    <input
                        bind:value={subject_employee.postal_code}
                        type="text"
                        placeholder="postal code.."
                        class="input input-bordered"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.country !== subject_employee.country}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Country</span>
                    <input
                        bind:value={subject_employee.country}
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
                {#if data.employee.role !== subject_employee.role}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Role</span>
                    <select
                        bind:value={subject_employee.role}
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
                {#if JSON.stringify(data.employee.branch) !== JSON.stringify(subject_employee.branch)}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Branch</span>
                    <select
                        bind:value={subject_employee.branch}
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
                {#if data.employee.is_active !== subject_employee.is_active}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="label cursor-pointer">
                    <span class="label-text">Active</span>
                    <input
                        type="checkbox"
                        bind:checked={subject_employee.is_active}
                        class="checkbox checkbox-primary"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-2">
            <div class="form-control">
                {#if data.employee.is_employed !== subject_employee.is_employed}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="label cursor-pointer">
                    <span class="label-text">Employed</span>
                    <input
                        type="checkbox"
                        bind:checked={subject_employee.is_employed}
                        class="checkbox checkbox-primary"
                    />
                </label>
            </div>
        </div>
        <div class="col-span-4">
            <div class="form-control">
                {#if data.employee.position !== subject_employee.position}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Position</span>
                    <select
                        bind:value={subject_employee.position}
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
                {#if data.employee.department !== subject_employee.department}
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary" />
                    </div>
                {/if}
                <label class="input-group input-group-vertical">
                    <span class="py-1">Department</span>
                    <select
                        bind:value={subject_employee.department}
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
        <div class="flex gap-2">
            <label for="confirm_modal" class="btn btn-primary">Save</label>
            <button class="btn btn-outline" on:click={() => reset()}>
                Reset
            </button>
        </div>
    </div>
</div>

<input
    type="checkbox"
    id="confirm_modal"
    class="modal-toggle"
    bind:checked={showModal}
/>
<form class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Submitting updates</h3>
        <p class="py-4">Are you sure about the updates?</p>
        <div class="modal-action">
            <button class="btn btn-primary" on:click={submit}>Submit</button>
            <button
                class="btn btn-outline"
                on:click={() => (showModal = false)}
            >
                Close
            </button>
        </div>
    </div>
    <label class="modal-backdrop" for="confirm_modal">Close</label>
</form>

<input
    type="checkbox"
    id="my_modal_6"
    class="modal-toggle"
    bind:checked={showLoading}
/>
<div class="modal">
    <div class="modal-box flex justify-center gap-2">
        <h3 class="font-bold text-center text-lg">loading!</h3>
        <span class="loading loading-dots loading-md text-center" />
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
