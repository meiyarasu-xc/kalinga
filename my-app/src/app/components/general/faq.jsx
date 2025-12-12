"use client"
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import DataTable from './data-table'

const defaultFAQItems = [
  {
    id: 1,
    question: "What is the admission process?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 2,
    question: "What are the eligibility criteria?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 3,
    question: "What documents are required?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 4,
    question: "How can I apply for scholarships?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 5,
    question: "What is the fee structure?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  }
]

const FAQ = ({
  items = defaultFAQItems,
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  backgroundColor = "bg-white",
  allowMultipleOpen = false,
  subtitleClassName = "",
  showHeading = true, // Optional prop to enable/disable heading
  titleClassName = "text-center", // Optional prop for title styling
  noSection = false, // Optional prop to render without section wrapper
  variant = "default", // "default" | "editable" | "table" | "table-display" | "button"
  // For table-display variant
  tableColumns = [
    { key: "slNo", label: "Sl. No", width: "w-20" },
    { key: "name", label: "Name of member", width: "w-48" },
    { key: "designation", label: "Designation", width: "flex-1" },
    { key: "category", label: "Category", width: "w-40" }
  ],
  tableData = [],
  tableSections = [], // Array of { id, title, data } for multiple sections
  overflowX = false,
  // For button variant
  buttons = []
}) => {
  const [openItems, setOpenItems] = useState(new Set())
  const [faqItems, setFaqItems] = useState(items)
  const [collapsedSections, setCollapsedSections] = useState(new Set())
  const [editableTableData, setEditableTableData] = useState(
    variant === "table" 
      ? items.map((item, index) => ({
          id: item.id,
          row: Math.floor(index / 2) + 1,
          col: (index % 2) + 1,
          question: item.question,
          answer: item.answer
        }))
      : []
  )

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultipleOpen) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }

  // Editable variant functions
  const addFAQItem = () => {
    const newId = Math.max(...faqItems.map(item => item.id), 0) + 1
    setFaqItems([...faqItems, {
      id: newId,
      question: "New Question",
      answer: "New Answer"
    }])
  }

  const updateFAQItem = (id, field, value) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const deleteFAQItem = (id) => {
    setFaqItems(faqItems.filter(item => item.id !== id))
  }

  // Table variant functions
  const addTableRow = () => {
    const maxRow = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.row), 0) : 0
    const newId = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.id), 0) + 1 : 1
    setEditableTableData([...editableTableData, {
      id: newId,
      row: maxRow + 1,
      col: 1,
      question: "New Question",
      answer: "New Answer"
    }])
  }

  const addTableColumn = () => {
    const maxCol = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.col), 0) : 0
    const maxRow = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.row), 0) : 0
    const newItems = []
    
    // Add a new column to each existing row
    for (let row = 1; row <= maxRow; row++) {
      const newId = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.id), 0) + row : row
      newItems.push({
        id: newId,
        row: row,
        col: maxCol + 1,
        question: "New Question",
        answer: "New Answer"
      })
    }
    setEditableTableData([...editableTableData, ...newItems])
  }

  const updateTableItem = (id, field, value) => {
    setEditableTableData(editableTableData.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const deleteTableItem = (id) => {
    setEditableTableData(editableTableData.filter(item => item.id !== id))
  }

  // Toggle section collapse for table-display and button variants
  const toggleSection = (id) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  // Get items to render based on variant
  const itemsToRender = variant === "editable" ? faqItems : items

  // Wrapper component that conditionally renders with or without section
  const Wrapper = ({ children, className = "" }) => {
    if (noSection) {
      return <div className={className}>{children}</div>
    }
    return <section className={className}>{children}</section>
  }

  // Render Table Display Variant (like first image)
  if (variant === "table-display") {
    // If tableSections is provided, use it; otherwise create sections from tableData or items
    const sections = tableSections.length > 0
      ? tableSections
      : tableData.length > 0 
        ? [{ id: 1, title: title || "2023-2024", data: tableData }]
        : items.map((item, index) => ({
            id: item.id || index,
            title: item.question || `${title || "Section"} ${index + 1}`,
            data: item.tableData || [{
              slNo: 1,
              name: item.question || "Name",
              designation: item.answer || "Designation",
              category: "Member"
            }]
          }))
    
    return (
      <Wrapper className={`${backgroundColor} py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {showHeading && (
            <SectionHeading 
              title={title} 
              subtitle={subtitle}
              titleClassName={titleClassName}
              subtitleClassName={`text-center ${subtitleClassName}`}
            />
          )}
          {sections.map((section, index) => {
            const sectionId = `section-${section.id || index}`
            const isCollapsed = collapsedSections.has(sectionId)
            
            return (
              <div key={section.id || index} className="max-w-6xl mx-auto mb-6 rounded-lg overflow-hidden shadow-md">
                {/* Header - Entire header is clickable */}
                <button
                  onClick={() => toggleSection(sectionId)}
                  className={`w-full flex items-center justify-between p-4 rounded-t-lg transition-colors ${
                    isCollapsed
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-[var(--button-red)] text-white hover:bg-[var(--button-red)]/90'
                  }`}
                >
                  <h3 className="text-lg font-plus-jakarta-sans font-semibold">
                    {section.title}
                  </h3>
                  <div className={`rounded-lg p-2 transition-transform duration-300 ${
                    isCollapsed ? 'bg-white' : 'bg-white'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isCollapsed 
                          ? 'text-[var(--button-red)] rotate-180' 
                          : 'text-[var(--button-red)]'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </button>
                
                {/* Table Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isCollapsed ? 'max-h-0' : 'max-h-[2000px]'
                  }`}
                >
                  <div className="bg-[var(--lite-sand)] p-4">
                    <DataTable
                      columns={tableColumns}
                      data={section.data}
                      overflowX={overflowX}
                      className="shadow-none"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    )
  }

  // Render Button Variant (like second image)
  if (variant === "button") {
    const buttonItems = buttons.length > 0 ? buttons : items.map((item, index) => ({
      id: item.id || index,
      title: item.question || `Section ${index + 1}`,
      description: item.answer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttons: item.buttons || [
        { label: "Annual Reports", onClick: () => {} },
        { label: "Placement Details", onClick: () => {} }
      ]
    }))
    
    return (
      <Wrapper className={`${backgroundColor} py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {showHeading && (
            <SectionHeading 
              title={title} 
              subtitle={subtitle}
              titleClassName={titleClassName}
              subtitleClassName={`text-center ${subtitleClassName}`}
            />
          )}
          {buttonItems.map((item, index) => {
            const sectionId = `button-section-${item.id || index}`
            const isCollapsed = collapsedSections.has(sectionId)
            
            return (
              <div key={item.id || index} className="max-w-4xl mx-auto mb-6 rounded-lg overflow-hidden shadow-md">
                {/* Header - Entire header is clickable */}
                <button
                  onClick={() => toggleSection(sectionId)}
                  className={`w-full flex items-center justify-between p-4 rounded-t-lg transition-colors ${
                    isCollapsed
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-[var(--button-red)] text-white hover:bg-[var(--button-red)]/90'
                  }`}
                >
                  <h3 className="text-lg font-plus-jakarta-sans font-semibold">
                    {item.title}
                  </h3>
                  <div className={`rounded-lg p-2 transition-transform duration-300 ${
                    isCollapsed ? 'bg-white' : 'bg-white'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isCollapsed 
                          ? 'text-[var(--button-red)] rotate-180' 
                          : 'text-[var(--button-red)]'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </button>
                
                {/* Content with Buttons */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isCollapsed ? 'max-h-0' : 'max-h-[2000px]'
                  }`}
                >
                  <div className="bg-[var(--lite-sand)] p-6">
                    <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.buttons.map((btn, btnIdx) => (
                        <button
                          key={btnIdx}
                          onClick={btn.onClick}
                          className="bg-[var(--button-red)] text-white px-6 py-3 rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2 group"
                        >
                          <span>{btn.label}</span>
                          <div className="bg-white rounded p-1">
                            <svg
                              className="w-4 h-4 text-[var(--button-red)] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    )
  }

  // Render Table Variant (editable)
  if (variant === "table") {
    const maxRow = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.row), 0) : 0
    const maxCol = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.col), 0) : 0
    
    return (
      <Wrapper className={`${backgroundColor} py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {showHeading && (
            <SectionHeading 
              title={title} 
              subtitle={subtitle}
              titleClassName={titleClassName}
              subtitleClassName={`text-center ${subtitleClassName}`}
            />
          )}

          <div className={`max-w-6xl mx-auto ${showHeading ? 'mt-5' : ''}`}>
            {/* Action Buttons */}
            <div className="flex gap-3 mb-4 justify-end">
              <button
                onClick={addTableRow}
                className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Row
              </button>
              <button
                onClick={addTableColumn}
                className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Column
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              {maxRow === 0 && maxCol === 0 ? (
                <div className="p-8 text-center text-gray-500 font-plus-jakarta-sans">
                  Table is empty. Click "Add Row" or "Add Column" to get started.
                </div>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      {Array.from({ length: Math.max(maxCol, 1) }, (_, colIndex) => (
                        <th key={colIndex} className="border border-gray-300 p-4 text-left font-plus-jakarta-sans font-semibold">
                          Column {colIndex + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.max(maxRow, 1) }, (_, rowIndex) => (
                      <tr key={rowIndex}>
                        {Array.from({ length: Math.max(maxCol, 1) }, (_, colIndex) => {
                        const cellData = editableTableData.find(
                          item => item.row === rowIndex + 1 && item.col === colIndex + 1
                        )
                        return (
                          <td key={colIndex} className="border border-gray-300 p-4 align-top">
                            {cellData ? (
                              <div className="space-y-2">
                                <input
                                  type="text"
                                  value={cellData.question}
                                  onChange={(e) => updateTableItem(cellData.id, 'question', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded font-plus-jakarta-sans font-semibold text-lg"
                                  placeholder="Question"
                                />
                                <textarea
                                  value={cellData.answer}
                                  onChange={(e) => updateTableItem(cellData.id, 'answer', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded font-plus-jakarta-sans text-sm min-h-[80px]"
                                  placeholder="Answer"
                                />
                                <button
                                  onClick={() => deleteTableItem(cellData.id)}
                                  className="text-red-600 hover:text-red-800 text-sm font-plus-jakarta-sans"
                                >
                                  Delete
                                </button>
                              </div>
                            ) : (
                              <div className="text-gray-400 text-sm">Empty</div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }

  // Render Default or Editable Variant
  return (
    <Wrapper className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading 
            title={title} 
            subtitle={subtitle}
            titleClassName={titleClassName}
            subtitleClassName={`text-center ${subtitleClassName}`}
          />
        )}

        {/* Add Button for Editable Variant */}
        {variant === "editable" && (
          <div className="max-w-4xl mx-auto mt-5 mb-4">
            <button
              onClick={addFAQItem}
              className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add FAQ Item
            </button>
          </div>
        )}

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mt-5">
          {itemsToRender.map((item) => {
            const isOpen = openItems.has(item.id)
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Question Header */}
                {variant === "editable" ? (
                  <div className="w-full flex items-center justify-between p-4 bg-gray-100">
                    <input
                      type="text"
                      value={item.question}
                      onChange={(e) => updateFAQItem(item.id, 'question', e.target.value)}
                      className="flex-1 text-left text-xl pr-4 font-plus-jakarta-sans bg-transparent border-none outline-none"
                      placeholder="Enter question"
                    />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex-shrink-0"
                      >
                        <div className={`bg-white rounded-lg p-1.5 sm:p-2 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 4L6 12M12 4L18 12M12 4L12 20"
                              fill="none"
                              stroke="var(--button-red)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                      <button
                        onClick={() => deleteFAQItem(item.id)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-center justify-between p-4 transition-colors ${
                      isOpen 
                        ? 'bg-[var(--button-red)] text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-left text-xl pr-4 font-plus-jakarta-sans">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`bg-white rounded-lg p-1.5 sm:p-2 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 4L6 12M12 4L18 12M12 4L12 20"
                            fill="none"
                            stroke="var(--button-red)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 bg-[var(--lite-sand)]">
                    {variant === "editable" ? (
                      <textarea
                        value={item.answer}
                        onChange={(e) => updateFAQItem(item.id, 'answer', e.target.value)}
                        className="w-full text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans bg-transparent border border-gray-300 rounded p-2 min-h-[100px]"
                        placeholder="Enter answer"
                      />
                    ) : (
                      <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default FAQ

