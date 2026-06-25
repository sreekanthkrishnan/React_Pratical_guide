# React.js Low-Level Design (LLD) Questions

Low-Level Design (LLD) questions are commonly asked in React interviews to evaluate your understanding of component architecture, state management, performance optimization, accessibility, and reusable UI design.

This guide covers the most frequently asked React LLD problems.

---

# 1. Counter Component

## Problem

Build a counter with:

- Increment
- Decrement
- Reset

## Concepts Tested

- `useState`
- Event handling
- Functional state updates
- Component re-rendering
- `useCallback`
- `React.memo`

## Follow-up Questions

- Prevent negative values.
- Add step increment.
- Store history.
- Undo/Redo functionality.
- Optimize unnecessary renders.

---

# 2. Todo List with Local Storage

## Problem

Build a Todo application that persists data across browser refreshes.

## Concepts Tested

- CRUD operations
- `useEffect`
- Local Storage
- Controlled components
- Immutable updates

## Follow-up Questions

- Edit Todo
- Delete Todo
- Mark Complete
- Search Todos
- Filter Completed
- Handle disabled Local Storage
- Persist theme and settings

---

# 3. Search with Debouncing

## Problem

Implement a search box that delays API calls while the user is typing.

## Concepts Tested

- Debouncing
- `useEffect`
- `setTimeout`
- Cleanup functions
- Custom Hooks
- API Integration

## Follow-up Questions

- Cancel previous requests
- Minimum character validation
- Loading state
- Error handling
- Cache previous searches

---

# 4. Reusable Modal Component

## Problem

Build a reusable modal that can be opened from anywhere in the application.

## Concepts Tested

- React Portal
- Context API
- Event bubbling
- Keyboard events
- Accessibility (ARIA)
- Focus management

## Follow-up Questions

- Close on Escape
- Close on Outside Click
- Nested Modals
- Animation
- Prevent Background Scroll

---

# 5. Infinite Scroll

## Problem

Load more data automatically when the user reaches the bottom of the page.

## Concepts Tested

- Intersection Observer API
- API Pagination
- Lazy Loading
- Virtualization
- Performance Optimization

## Follow-up Questions

- Loading Spinner
- Error Retry
- End of Results
- Manual Load More
- Skeleton UI

---

# 6. Form with Validation

## Problem

Build a registration form with real-time validation.

## Concepts Tested

- Controlled Components
- Form Validation
- Regular Expressions
- Error Handling
- UX Best Practices

## Follow-up Questions

- Password Strength
- Confirm Password
- Async Email Validation
- Disable Submit Button
- Dynamic Fields

---

# 7. Theme Switcher

## Problem

Implement Dark Mode and Light Mode with persistence.

## Concepts Tested

- Context API
- CSS Variables
- Local Storage
- System Theme Detection

## Follow-up Questions

- Multiple Themes
- Avoid Flash of Incorrect Theme (FOUC)
- Theme Provider
- Global State

---

# 8. Auto Complete Component

## Problem

Display search suggestions while typing.

## Concepts Tested

- Debouncing
- API Calls
- Keyboard Navigation
- Accessibility
- Dropdown Management

## Follow-up Questions

- Highlight Matching Text
- Arrow Key Navigation
- Enter Selection
- Mouse Selection
- Recent Searches
- Cached Results

---

# Additional React LLD Questions

## Beginner

- Accordion
- Tabs
- Star Rating
- Progress Bar
- Toast Notifications
- Tooltip
- Dropdown Menu
- Pagination
- Image Carousel
- Countdown Timer

---

## Intermediate

- Multi-Step Form
- Kanban Board
- Shopping Cart
- Product Filters
- File Upload
- Drag and Drop List
- Calendar
- Chat Window
- Dashboard Widgets
- Notification Center

---

## Advanced

- Data Table
- Virtualized List
- Tree View
- Rich Text Editor
- Command Palette
- Dynamic Form Builder
- Code Editor
- Workflow Builder
- Whiteboard
- Micro Frontend Shell

---

# Common Concepts Interviewers Expect

- Component Composition
- State Management
- Props Drilling
- Context API
- Custom Hooks
- React Hooks
- Performance Optimization
- React.memo
- useMemo
- useCallback
- Lazy Loading
- Code Splitting
- Error Boundaries
- Accessibility (ARIA)
- Responsive Design
- Folder Structure
- Reusable Components
- API Handling
- Loading & Error States
- Testing Strategy
- TypeScript Support

---

# Interview Tips

- Clarify requirements before coding.
- Break the problem into reusable components.
- Keep state as local as possible.
- Avoid unnecessary re-renders.
- Handle loading, empty, and error states.
- Consider accessibility from the start.
- Explain your design decisions while coding.
- Optimize only after achieving a correct solution.
- Write clean, maintainable, and scalable code.

---

## Next Steps

For each LLD problem in this repository, you'll find:

- Problem Statement
- Requirements
- Folder Structure
- Step-by-Step Implementation
- Complete Source Code
- Performance Optimizations
- Common Mistakes
- Interview Follow-up Questions
- Best Practices
- Possible Enhancements
- Machine Coding Variations
