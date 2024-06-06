import { handleScroll } from './scroll';

describe('handleScroll', () => {
  it('should run callback when it reach the bottom of element', () => {
    // Arrange
    const mockedCallback = vi.fn();
    const element = {
      target: {
        scrollTop: 50,
        scrollHeight: 100,
        clientHeight: 50,
      },
    };
    // Act
    handleScroll(mockedCallback)(element);
    // Assert
    expect(mockedCallback).toHaveBeenCalled();
  });
  it('should run callback when it get over bottom of element', () => {
    // Arrange
    const mockedCallback = vi.fn();
    const element = {
      target: {
        scrollTop: 50,
        scrollHeight: 100,
        clientHeight: 51,
      },
    };
    // Act
    handleScroll(mockedCallback)(element);
    // Assert
    expect(mockedCallback).toHaveBeenCalled();
  });
  it('should not run callback when it does not reach the bottom of element', () => {
    // Arrange
    const mockedCallback = vi.fn();
    const element = {
      target: {
        scrollTop: 50,
        scrollHeight: 100,
        clientHeight: 49,
      },
    };
    // Act
    handleScroll(mockedCallback)(element);
    // Assert
    expect(mockedCallback).not.toHaveBeenCalled();
  });
  it('should not run callback when element is not passed', () => {
    // Arrange
    const mockedCallback = vi.fn();
    const element = {};
    // Act
    handleScroll(mockedCallback)(element);
    // Assert
    expect(mockedCallback).not.toHaveBeenCalled();
  });
  it('should not run callback when element is null/undefined', () => {
    // Arrange
    const mockedCallback = vi.fn();
    const element = null; // it can be undefined or any falsy value
    // Act
    handleScroll(mockedCallback)(element);
    // Assert
    expect(mockedCallback).not.toHaveBeenCalled();
  });
  it('should not run callback when callback is null or undefined', () => {
    // Arrange
    const mockedCallback = null; // it can be undefined or any falsy value
    const element = {
      target: {
        scrollTop: 50,
        scrollHeight: 100,
        clientHeight: 51,
      },
    };
    // Act
    const handler = () => handleScroll(mockedCallback)(element);
    // Assert
    expect(handler).not.toThrow();
  });
  it('should not run callback when callback is not a function', () => {
    // Arrange
    const mockedCallback = 'not a function';
    const element = {
      target: {
        scrollTop: 50,
        scrollHeight: 100,
        clientHeight: 51,
      },
    };
    // Act
    const handler = () => handleScroll(mockedCallback)(element);
    // Assert
    expect(handler).not.toThrow();
  });
});
