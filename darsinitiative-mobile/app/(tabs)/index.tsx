import React, { useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const timelineEvents = [
  {
    year: '2019',
    title: 'How We Started',
    description: 'Dars Initiative began as a small group of passionate individuals dedicated to making education accessible to all. Our journey started with local workshops and community outreach.',
    bg: '#f7e9d7',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2020',
    title: 'First Community Project',
    description: 'Launched our first major project, providing free tutoring and resources to underprivileged students during the pandemic.',
    bg: '#e0f7fa',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2021',
    title: 'Expanding Our Reach',
    description: 'Partnered with local schools and organizations to expand our impact, reaching hundreds of new learners.',
    bg: '#e8f5e9',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2022',
    title: 'Tech for Good',
    description: 'Introduced technology bootcamps and digital literacy programs, empowering youth with essential skills for the future.',
    bg: '#fffde7',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2023',
    title: 'Looking Forward',
    description: 'Planning new initiatives, including scholarships, mentorship, and more community-driven projects.',
    bg: '#ede7f6',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80'
  }
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const SPACING = 32;

export default function TimelineScreen() {
  const scrollRef = useRef(null);

  return (
    <View style={{ flex: 1, backgroundColor: timelineEvents[0].bg }}>
      <Text style={styles.title}>Our Journey</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: SPACING }}
        style={{ flexGrow: 0 }}
      >
        {timelineEvents.map((event, idx) => (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.9}
            style={[styles.card, { backgroundColor: event.bg, marginRight: idx === timelineEvents.length - 1 ? 0 : SPACING }]}
          >
            <View style={styles.dot} />
            <Image source={{ uri: event.img }} style={styles.image} />
            <Text style={styles.year}>{event.year}</Text>
            <Text style={styles.cardTitle}>{event.title}</Text>
            <Text style={styles.desc}>{event.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD76A',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 30,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFD76A',
    borderWidth: 3,
    borderColor: '#181818',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  year: {
    color: '#FFD76A',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 6,
    textAlign: 'center',
  },
  desc: {
    color: '#222',
    fontSize: 15,
    textAlign: 'center',
  },
});
