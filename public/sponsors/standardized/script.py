import cv2
import numpy as np

COLOR_THRESHOLD = 40

source_pixel = None
target_pixel = None

imgA = cv2.imread("hp.jpg")
imgB = cv2.imread("result.png")

imgA_display = imgA.copy()
imgB_display = imgB.copy()

def click_source(event, x, y, flags, param):
    global source_pixel
    if event == cv2.EVENT_LBUTTONDOWN:
        source_pixel = imgA[y, x].copy()
        print("Selected source pixel (from image A):", source_pixel)

def click_target(event, x, y, flags, param):
    global target_pixel
    if event == cv2.EVENT_LBUTTONDOWN:
        target_pixel = imgB[y, x].copy()
        print("Selected target pixel (from image B):", target_pixel)

cv2.namedWindow("Image A (pick source color)")
cv2.namedWindow("Image B (pick target color)")

cv2.setMouseCallback("Image A (pick source color)", click_source)
cv2.setMouseCallback("Image B (pick target color)", click_target)

print("Click a pixel in Image A, then a pixel in Image B. Press 'r' to replace. Press 'q' to quit.")

while True:
    cv2.imshow("Image A (pick source color)", imgA_display)
    cv2.imshow("Image B (pick target color)", imgB_display)

    key = cv2.waitKey(1) & 0xFF

    if key == ord('r'):
        if source_pixel is None or target_pixel is None:
            print("You must click one pixel in each image first!")
            continue

        print("Replacing similar pixels...")

        diff = np.linalg.norm(imgB.astype(np.int32) - target_pixel.astype(np.int32), axis=2)

        mask = diff < COLOR_THRESHOLD

        result = imgB.copy()
        result[mask] = source_pixel

        cv2.imshow("Result", result)
        cv2.imwrite("result.png", result)
        print("Saved as result.png")

    if key == ord('q'):
        break

cv2.destroyAllWindows()
