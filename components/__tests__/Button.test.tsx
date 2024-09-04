// Button.test.tsx
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Button from '../Button'

test('renders correctly with given title', () => {
  const { getByText } = render(<Button title="Click me" onPress={() => {}} />)
  expect(getByText('Click me')).toBeTruthy()
})

test('calls onPress function when pressed', () => {
  const onPressMock = jest.fn()
  const { getByText } = render(<Button title="Click me" onPress={onPressMock} />)
  fireEvent.press(getByText('Click me'))
  expect(onPressMock).toHaveBeenCalledTimes(1)
})
