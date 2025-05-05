import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const eventListStyles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: colors.text.secondary,
    textAlign: 'center',
  },
  // Event items
  eventItem: {
    backgroundColor: colors.background.secondary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 10,
  },
  // Status section
  statusContainer: {
    marginTop: 5,
  },
  statusLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  statusButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    minWidth: '30%',
    alignItems: 'center',
  },
  statusButtonText: {
    fontWeight: '500',
    fontSize: 14,
  },
  // Filter buttons
  filterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
    activeFilterButton: {
    backgroundColor: colors.primary,
  },
  filterButtonText: {
    color: colors.primary,
    fontWeight: '500',
  },
  activeFilterButtonText: {
    color: colors.white,
  },
});