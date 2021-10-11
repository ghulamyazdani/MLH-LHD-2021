import cv2
import matplotlib.pyplot as plt
img = cv2.imread('Img.jpg')
edges = cv2.Canny(img, 100, 200, 3, L2gradient=True)
plt.figure()
plt.title('Spider')
plt.imsave('tracedimg.png', edges, cmap='gray', format='png')
plt.imshow(edges, cmap='gray')
plt.show()