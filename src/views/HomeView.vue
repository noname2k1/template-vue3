<script setup>
import Input from '@/components/customs/Input.vue';
import Header from '@/components/partials/Header.vue';
import NavBar from '@/components/partials/NavBar.vue';
import Sidebar from '@/components/partials/Sidebar.vue';
import Select from '@/components/customs/Select.vue';
import DateSelect from '@/components/customs/DateSelect.vue';
import CheckBox from '@/components/customs/CheckBox.vue';
</script>

<template>
  <div class="container bg-primary">
    <Header />
    <NavBar />
    <div
      :class="[
        'flex px-4 bg-primary fixed top-[140px] duration-700 right-0 bottom-0 overflow-y-auto left-[237px]',
      ]"
    >
      <!-- sidebar -->
      <Sidebar />
      <!-- contents -->
      <div :class="['flex-1']">
        <h1 class="text-3xl font-semibold my-1">Patient Information</h1>
        <form class="grid grid-cols-2 gap-7 auto-cols-auto">
          <div class="">
            <div class="">
              <h3 class="text-2xl font-semibold mt-3 mb-1">Patient</h3>
              <div class="border rounded-md p-5 grid grid-cols-2 gap-3 gap-y-2">
                <Input label="Last Name" placeholder="Please Input" />
                <Input label="First Name" placeholder="Please Input" />
                <Input label="Middle Name" placeholder="Optional" />
                <Input label="Birth Surname" placeholder="Optional" />
                <Input label="Mediacare Beneficiary ID" placeholder="Example" />
                <Input label="Onco Patient ID" placeholder="Example" />
                <Select label="Prefix" />
                <Select label="Suffix" />
                <Select label="Spouse / Parent" />
                <div class=""></div>
                <CheckBox
                  label="Non-Oncology Patient"
                  name="Non-oncology-patient"
                />
              </div>
              <div class="">
                <h3 class="text-2xl font-semibold mt-3 mb-1">
                  Current Address
                </h3>
                <div
                  class="border rounded-md p-5 grid grid-cols-2 gap-3 gap-y-2"
                >
                  <Input
                    label="Address 1"
                    placeholder="1313 Mockingbird Lane"
                  />
                  <Input label="Address 2" placeholder="Please Input" />
                  <Input label="Postal Code" placeholder="29304" />
                  <Input label="City" placeholder="Please Input" />
                  <Select label="Place Of Birth" />
                  <Select label="County" moreIcon />
                  <Select label="Country" moreIcon />
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <h3 class="text-2xl font-semibold mt-3 mb-1">Other</h3>
            <div class="border rounded-md p-5 grid grid-cols-2 gap-3 gap-y-2">
              <Input label="SSN" placeholder="0000-00-0000" />
              <Input label="Home Phone" placeholder="0000-00-0000" />
              <Select label="Span/Hisp Origin" />
              <Select label="Religion" />
              <Select label="Place Of Birth" moreIcon />
              <DateSelect label="Date Of Birth" />
              <Input label="Occupation" />
              <Input
                label="Occupation Description"
                placeholder="Please Describe"
              />
              <Select label="Industry" moreIcon />
              <Input
                label="Industry Description"
                placeholder="Please Describe"
              />
              <Select label="Race #1" />
              <Select label="Race #2" />
              <Select label="Race #3" />
              <Select label="Race #4" />
              <Select label="Race #5" />
              <Select label="Sex" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
