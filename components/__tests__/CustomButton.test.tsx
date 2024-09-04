// CustomButton.test.tsx
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CustomButton from '../CustomButton' // ปรับให้เป็น path ที่ถูกต้องของ CustomButton ของคุณ

test('renders correctly with given title', () => {
  const { getByText } = render(<CustomButton title="Click me" handlePress={() => {}} />)
  expect(getByText('Click me')).toBeTruthy()
})

test('calls handlePress function when pressed', () => {
  const handlePressMock = jest.fn()
  const { getByText } = render(<CustomButton title="Click me" handlePress={handlePressMock} />)
  fireEvent.press(getByText('Click me'))
  expect(handlePressMock).toHaveBeenCalledTimes(1)
})

test('displays ActivityIndicator when isLoading is true', () => {
  const { getByTestId } = render(<CustomButton title="Loading" handlePress={() => {}} isLoading={true} />)
  const activityIndicator = getByTestId('activity-indicator')
  expect(activityIndicator).toBeTruthy()
})

test('button is disabled when isLoading is true', () => {
  const { getByRole } = render(<CustomButton title="Loading" handlePress={() => {}} isLoading={true} />)
  const button = getByRole('button')
  expect(button.props.disabled).toBe(true)
})

test('applies custom container and text styles when provided', () => {
  const containerStyles = 'bg-custom'
  const textStyles = 'text-custom'
  const { getByText } = render(
    <CustomButton title="Styled Button" handlePress={() => {}} containerStyles={containerStyles} textStyles={textStyles} />
  )

  const buttonText = getByText('Styled Button')
  expect(buttonText.props.className).toContain('text-custom')
})
