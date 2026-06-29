import sys
from rembg import remove
from PIL import Image
import io

input_path = '/Users/poovarasu/Downloads/high-resolution-color-logo (2).png'

try:
    with open(input_path, 'rb') as i:
        input_data = i.read()

    print("Removing background with rembg...")
    output_data = remove(input_data)
    
    img = Image.open(io.BytesIO(output_data))
    
    # Get bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        print(f"Cropping to bbox: {bbox}")
        img = img.crop(bbox)
    
    img.save('/Users/poovarasu/Desktop/Goals/frontend/src/assets/logo.png', 'PNG')
    img.save('/Users/poovarasu/Desktop/Goals/frontend/public/favicon.png', 'PNG')
    print("Successfully processed and saved logo!")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
