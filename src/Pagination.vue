<template>
    <div class="row view-pager">
      <div class="col-sm-12">
        <div class="text-center">
          <div class="dataTables_paginate paging_simple_numbers">
            <ul class="pagination pagination-sm">
              <!-- Previous Button -->
              <li 
                class="paginate_button page-item previous" 
                :class="{ disabled: currentPage === 1 }">
                <a 
                  href="#" 
                  @click.prevent="changePage(currentPage - 1)" 
                  class="page-link prev">
                  <i class="simple-icon-arrow-left"></i>
                </a>
              </li>
  
              <!-- Page Numbers -->
              <li 
                v-for="page in pages" 
                :key="page" 
                class="paginate_button page-item" 
                :class="{ active: page === currentPage }">
                <a 
                  href="#" 
                  @click.prevent="changePage(page)" 
                  class="page-link">
                  {{ page }}
                </a>
              </li>
  
              <!-- Next Button -->
              <li 
                class="paginate_button page-item next" 
                :class="{ disabled: currentPage === totalPages }">
                <a 
                  href="#" 
                  @click.prevent="changePage(currentPage + 1)" 
                  class="page-link next">
                  <i class="simple-icon-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, defineProps, defineEmits } from 'vue';
  
  // Define props
  const props = defineProps({
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    visiblePages: {
      type: Number,
      default: 5 // Default visible page numbers
    }
  });
  
  // Define emits
  const emit = defineEmits(['page-changed']);
  
  // Computed properties
  const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
  
  const pages = computed(() => {
    const pagesArray = [];
    const half = Math.floor(props.visiblePages / 2);
    let startPage = Math.max(1, props.currentPage - half);
    let endPage = Math.min(totalPages.value, props.currentPage + half);
  
    // Adjust start and end if we're near the first or last page
    if (endPage - startPage + 1 < props.visiblePages) {
      if (props.currentPage <= half) {
        endPage = Math.min(totalPages.value, props.visiblePages);
      } else if (props.currentPage + half >= totalPages.value) {
        startPage = Math.max(1, totalPages.value - props.visiblePages + 1);
      }
    }
  
    // Create the array of visible pages
    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }
  
    return pagesArray;
  });
  
  // Methods
  const changePage = (page) => {
    if (page < 1 || page > totalPages.value) return;
    emit('page-changed', page);
  };
  </script>
  